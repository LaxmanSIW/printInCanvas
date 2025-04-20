import  { GROUP_LAYOUT, JOB_LAYOUT, jobMap, groupMap, pred_succ_rel,Graph } from './data.js';

// Global variables
let canvas;
let canvasHeight = 0;
let canvasWidth = 0;
let graph; // Make graph globally accessible
let allChildMap; // Make allChildMap globally accessible
const jobReference = {};
const groupReference = {};
const linkReference = {};
const triReference = {};
const lastSelectedObj = { jobs: [], links: [], tri: [] };

console.log()

initializeCanvas()
function initializeCanvas() {
    const canvasElement = document.getElementById('workflow-canvas');
    if (!canvasElement) return;

    // Set initial canvas size
    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    canvas = new fabric.Canvas('workflow-canvas', {
        width: window.innerWidth,
        height: window.innerHeight,
        selection: false,
        backgroundColor: '#f8f9fa'
    });

    if (!canvas) return;

    initializeWorkflow();
}
/**
 * Initializes the workflow visualization on the canvas.
 * Sets up the canvas, creates job groups, and renders all components.
 * 
 * @function
 * @description
 * This function performs the following steps:
 * 1. Clears the canvas and resets all references
 * 2. Initializes the graph with job dependencies
 * 3. Groups jobs by their respective groups
 * 4. Processes the graph to determine job levels
 * 5. Renders the complete workflow
 * 
 * @returns {void}
 */
function initializeWorkflow() {
    if (!canvas) return;

    canvas.clear();
    
    // Reset all references with empty objects
    Object.assign(jobReference, {});
    Object.assign(groupReference, {});
    Object.assign(linkReference, {});
    Object.assign(triReference, {});
    
    Object.keys(groupMap).forEach(group => {
        groupMap[group] = { width: 0, levels: {}, jobs: [] };
    });

    graph = new Graph();
    
    pred_succ_rel.forEach(([pred, succ]) => {
        graph.addEdge(pred, succ);
    });

    const jobsWithPredecessors = new Set(pred_succ_rel.map(([_, succ]) => succ));
    Object.keys(jobMap).forEach(job => {
        if (!jobsWithPredecessors.has(job)) {
            graph.addEdge('ROOT', job);
        }
    });

    for (let j in jobMap) {
        if (jobMap[j]?.groupName) {
            if (!groupMap[jobMap[j].groupName]["jobs"]) {
                groupMap[jobMap[j].groupName]["jobs"] = [];
            }
            groupMap[jobMap[j].groupName]["jobs"].push(j);
        }
    }

    allChildMap = graph.getAllDescendantsFurthest("ROOT");
    processGraph();
    renderWorkflow();

    canvas.renderAll();

}

function processGraph() {
    if (!allChildMap) return;

    Array.from(allChildMap.keys()).forEach(child => {
        if (child === "ROOT") return;
        if (!jobMap[child]) return;

        const groupName = jobMap[child].groupName;
        let obj = groupMap[groupName];
        let level = obj["levels"];
        let lnum = allChildMap.get(child).level;

        if (!level[lnum]) {
            level[lnum] = { "N": 0, "jobs": [] };
        }

        level[lnum]["N"]++; // count number of jobs in group
        level[lnum]["jobs"].push(child); // add jobs in group
        
        // Update group width
        obj["width"] = Math.max(obj["width"], level[lnum]["N"]);
    });
}

function renderWorkflow() {
    let startX = GROUP_LAYOUT.dimensions.startX;
    let startY = GROUP_LAYOUT.dimensions.startY;

    Object.keys(groupMap).forEach((group, index) => {
        if (groupMap[group]["width"] < 1) return;

        let temp = Object.keys(groupMap[group]["levels"]);
        let groupHeight = temp.length * (JOB_LAYOUT.height + JOB_LAYOUT.marginY) + GROUP_LAYOUT.dimensions.topJob;
        let groupWidth = (JOB_LAYOUT.width + JOB_LAYOUT.marginX) * groupMap[group].width + JOB_LAYOUT.marginX;

        drawGroup(group, startX, startY, groupWidth, groupHeight);
        startX += groupWidth + GROUP_LAYOUT.dimensions.marginX;
    });

    createLinks();

    // Add all objects to canvas in correct order
    Object.values(groupReference).forEach(group => canvas.add(group));
    Object.values(linkReference).forEach(link => canvas.add(link));
    Object.values(jobReference).forEach(job => canvas.add(job));

    canvas.renderAll();
}

/**
 * Draws a group container with all its components.
 * Creates the visual representation of a job group including header, title, and status bar.
 * 
 * @function
 * @param {string} group - Name of the group to draw
 * @param {number} x - X coordinate for group placement
 * @param {number} y - Y coordinate for group placement
 * @param {number} groupWidth - Width of the group container
 * @param {number} groupHeight - Height of the group container
 * 
 * @description
 * Creates a group container with:
 * 1. Main rectangle background
 * 2. Header section with title
 * 3. Status bar
 * 4. Draws all jobs within the group using calculated positions
 * 
 * Jobs are positioned in levels, with parallel jobs spread horizontally
 * within their level.
 */
function drawGroup(group, x, y, groupWidth, groupHeight) {
    if (groupReference[group]) return;

    let maxJobsInLevel = 0;
    Object.values(groupMap[group].levels).forEach(level => {
        maxJobsInLevel = Math.max(maxJobsInLevel, level.jobs.length);
    });
    
    const minGroupWidth = maxJobsInLevel * (JOB_LAYOUT.width + JOB_LAYOUT.marginX) + JOB_LAYOUT.marginX;
    groupWidth = Math.max(groupWidth, minGroupWidth);

    const rect = new fabric.Rect({
        width: groupWidth,
        height: groupHeight,
        fill: GROUP_LAYOUT.container.background,
        stroke: GROUP_LAYOUT.container.border.color,
        strokeWidth: GROUP_LAYOUT.container.border.width,
        left: x,
        top: y,
        rx: GROUP_LAYOUT.container.border.radius,
        ry: GROUP_LAYOUT.container.border.radius,
        shadow: GROUP_LAYOUT.container.shadow,
        ...GROUP_LAYOUT.container.interaction
    });

    const rect1 = new fabric.Rect({
        width: groupWidth,
        height: GROUP_LAYOUT.header.height,
        fill: GROUP_LAYOUT.header.background,
        stroke: GROUP_LAYOUT.header.border.color,
        strokeWidth: GROUP_LAYOUT.header.border.width,
        left: x,
        top: y,
        rx: GROUP_LAYOUT.header.border.radius,
        ry: GROUP_LAYOUT.header.border.radius,
        ...GROUP_LAYOUT.header.interaction
    });

    const text = new fabric.Text(group, {
        fontSize: GROUP_LAYOUT.header.title.fontSize,
        fontFamily: GROUP_LAYOUT.header.title.fontFamily,
        fontWeight: GROUP_LAYOUT.header.title.fontWeight,
        fill: GROUP_LAYOUT.header.title.color,
        charSpacing: GROUP_LAYOUT.header.title.charSpacing,
        left: x + GROUP_LAYOUT.header.title.paddingX,
        top: y + GROUP_LAYOUT.header.title.paddingY,
        ...GROUP_LAYOUT.header.interaction
    });

    const status = new fabric.Rect({
        width: groupWidth,
        height: GROUP_LAYOUT.status.height,
        fill: GROUP_LAYOUT.status.colors.waiting,
        stroke: GROUP_LAYOUT.status.border.width,
        strokeWidth: 0,
        left: x,
        top: y + GROUP_LAYOUT.status.offsetY,
        ...GROUP_LAYOUT.status.interaction
    });

    const groupObj = new fabric.Group([rect, rect1, text, status], {
        left: x,
        top: y,
        ...GROUP_LAYOUT.interaction
    });

    groupReference[group] = groupObj;

    let jobPerLevels = groupMap[group]["levels"];
    let temp = 0;
    let orginx = x + Math.floor(groupWidth / 2);

    for (let key in jobPerLevels) {
        let joby = y + GROUP_LAYOUT.dimensions.topJob + temp * (JOB_LAYOUT.height + JOB_LAYOUT.marginY);
        jobPerLevels[key]["jobs"].forEach(function(job, i, Arr) {
            let { xCoord, yCoord } = getNthPoint(orginx, joby, Arr.length, i);
            drawJob(job, xCoord, yCoord, group);
        });
        temp += 1;
    }
}

/**
 * Draws a job card with all its components at the specified position.
 * Creates a fabric.js group containing the job card rectangle, title, status bar,
 * divider line, time sections, and connection triangles.
 * 
 * @param {string} JobName - Unique identifier for the job
 * @param {number} x - X coordinate for job placement
 * @param {number} y - Y coordinate for job placement
 * @param {string} groupName - Name of the group this job belongs to
 * @returns {void}
 * 
 * @description
 * The job card consists of several components in this order:
 * 1. Main rectangle (background)
 * 2. Title text
 * 3. Status bar
 * 4. Divider line
 * 5. "Start" label
 * 6. Start time value
 * 7. "End" label
 * 8. End time value
 * 9. Top triangle connector
 * 10. Bottom triangle connector
 * 
 * All components are positioned relative to the job card's top-left corner.
 * The job card is added to jobReference for later access and updating.
 */
function drawJob(JobName, x, y, groupName) {
    // Update canvas dimensions if needed
    if (canvasWidth <= x) canvasWidth = x + JOB_LAYOUT.width;
    if (canvasHeight <= y) canvasHeight = y + JOB_LAYOUT.height;

    // Return if job already exists
    if (jobReference[JobName]) return;

    // Verify job belongs to the specified group
    const job = jobMap[JobName];
    if (job?.groupName != groupName) return;

    // Define relative positions for all elements within the job card
    const layout = {
        card: { x: 0, y: 0 },
        title: { x: JOB_LAYOUT.title.paddingX, y: JOB_LAYOUT.title.paddingY },
        status: { x: 0, y: JOB_LAYOUT.status.y },
        divider: { y: JOB_LAYOUT.divider.y },
        timeSection: {
            start: {
                label: { x: JOB_LAYOUT.title.paddingX, y: JOB_LAYOUT.timeSection.y },
                value: { x: JOB_LAYOUT.timeSection.value.xOffset, y: JOB_LAYOUT.timeSection.y }
            },
            end: {
                label: { x: JOB_LAYOUT.title.paddingX, y: JOB_LAYOUT.timeSection.y + JOB_LAYOUT.timeSection.rowSpacing },
                value: { x: JOB_LAYOUT.timeSection.value.xOffset, y: JOB_LAYOUT.timeSection.y + JOB_LAYOUT.timeSection.rowSpacing }
            }
        },
        triangle: {
            top: { 
                x: JOB_LAYOUT.width / 2, 
                y: JOB_LAYOUT.triangle.top.offsetY 
            },
            bottom: { 
                x: JOB_LAYOUT.width / 2, 
                y: JOB_LAYOUT.height + JOB_LAYOUT.triangle.height + JOB_LAYOUT.triangle.bottom.offsetY 
            }
        }
    };

    // Main job card rectangle
    const rect = new fabric.Rect({
        width: JOB_LAYOUT.width,
        height: JOB_LAYOUT.height,
        fill: JOB_LAYOUT.card.background,
        stroke: JOB_LAYOUT.card.borderColor,
        strokeWidth: JOB_LAYOUT.card.borderWidth,
        left: layout.card.x,
        top: layout.card.y,
        rx: JOB_LAYOUT.card.cornerRadius,
        ry: JOB_LAYOUT.card.cornerRadius,
        shadow: JOB_LAYOUT.card.shadow,
        ...JOB_LAYOUT.card.interaction
    });

    // Job title
    const text = new fabric.Text(JobName, {
        fontSize: JOB_LAYOUT.title.fontSize,
        fontFamily: JOB_LAYOUT.title.fontFamily,
        fill: JOB_LAYOUT.title.color,
        fontWeight: JOB_LAYOUT.title.fontWeight,
        charSpacing: JOB_LAYOUT.title.charSpacing,
        left: layout.title.x,
        top: layout.title.y,
        ...JOB_LAYOUT.title.interaction
    });

    // Status bar
    const statusColor = JOB_LAYOUT.status.colors[job.status] || JOB_LAYOUT.status.colors.default;
    const status = new fabric.Rect({
        width: JOB_LAYOUT.width,
        height: JOB_LAYOUT.status.height,
        fill: statusColor,
        left: layout.status.x,
        top: layout.status.y,
        ...JOB_LAYOUT.status.interaction
    });

    // Divider line
    const dividerLine = new fabric.Line(
        [0, layout.divider.y, JOB_LAYOUT.width, layout.divider.y],
        {
            stroke: JOB_LAYOUT.divider.color,
            strokeWidth: JOB_LAYOUT.divider.width,
            ...JOB_LAYOUT.divider.interaction
        }
    );

    // Time section - Start
    const start = new fabric.Text("Start", {
        fontSize: JOB_LAYOUT.timeSection.label.fontSize,
        fontFamily: JOB_LAYOUT.timeSection.label.fontFamily,
        fill: JOB_LAYOUT.timeSection.label.color,
        charSpacing: JOB_LAYOUT.timeSection.label.charSpacing,
        left: layout.timeSection.start.label.x,
        top: layout.timeSection.start.label.y,
        ...JOB_LAYOUT.timeSection.label.interaction
    });

    const startValue = new fabric.Text(job.startTime || "", {
        fontSize: JOB_LAYOUT.timeSection.value.fontSize,
        fontFamily: JOB_LAYOUT.timeSection.value.fontFamily,
        fill: JOB_LAYOUT.timeSection.value.color,
        charSpacing: JOB_LAYOUT.timeSection.value.charSpacing,
        left: layout.timeSection.start.value.x,
        top: layout.timeSection.start.value.y,
        ...JOB_LAYOUT.timeSection.value.interaction
    });

    // Time section - End
    const end = new fabric.Text("End:", {
        fontSize: JOB_LAYOUT.timeSection.label.fontSize,
        fontFamily: JOB_LAYOUT.timeSection.label.fontFamily,
        fill: JOB_LAYOUT.timeSection.label.color,
        charSpacing: JOB_LAYOUT.timeSection.label.charSpacing,
        left: layout.timeSection.end.label.x,
        top: layout.timeSection.end.label.y,
        ...JOB_LAYOUT.timeSection.label.interaction
    });

    const endValue = new fabric.Text(job.endTime || "", {
        fontSize: JOB_LAYOUT.timeSection.value.fontSize,
        fontFamily: JOB_LAYOUT.timeSection.value.fontFamily,
        fill: JOB_LAYOUT.timeSection.value.color,
        charSpacing: JOB_LAYOUT.timeSection.value.charSpacing,
        left: layout.timeSection.end.value.x,
        top: layout.timeSection.end.value.y,
        ...JOB_LAYOUT.timeSection.value.interaction
    });

    // Connection triangles with relative positioning
    let bottomTri = new fabric.Triangle({
        left: layout.triangle.bottom.x,
        top: layout.triangle.bottom.y,
        width: JOB_LAYOUT.triangle.width,
        height: JOB_LAYOUT.triangle.height,
        fill: JOB_LAYOUT.triangle.color,
        angle: 180,
        originX: 'center',
        originY: 'top',
        ...JOB_LAYOUT.triangle.interaction
    });

    let topTri = new fabric.Triangle({
        left: layout.triangle.top.x,
        top: layout.triangle.top.y,
        width: JOB_LAYOUT.triangle.width,
        height: JOB_LAYOUT.triangle.height,
        fill: JOB_LAYOUT.triangle.color,
        angle: 0,
        originX: 'center',
        originY: 'bottom',
        ...JOB_LAYOUT.triangle.interaction
    });

    // Create the job group with all elements including triangles
    const jobGroup = new fabric.Group([
        rect,
        text,
        status,
        dividerLine,
        start,
        startValue,
        end,
        endValue,
        topTri,
        bottomTri
    ], {
        left: x,
        top: y,
        ...JOB_LAYOUT.interaction
    });

    // Store references with additional information for link connections
    jobReference[JobName] = jobGroup;
    jobGroup.jobName = JobName; // Add jobName to the group for reference

    // Store triangle positions relative to the group for link connections
    jobGroup.connectionPoints = {
        top: { x: layout.triangle.top.x, y: layout.triangle.top.y },
        bottom: { x: layout.triangle.bottom.x, y: layout.triangle.bottom.y }
    };
}

/**
 * Creates connection links between jobs based on their dependencies.
 * Uses the job's connection points (triangles) to draw lines between related jobs.
 * 
 * @description
 * For each job in the workflow:
 * 1. Gets the bottom triangle position of the source job
 * 2. Finds all direct successors of the job
 * 3. For each successor:
 *    - Gets the top triangle position of the target job
 *    - Creates a line connecting the triangles
 *    - Applies link styling from JOB_LAYOUT.link
 *    - Stores the link in linkReference
 * 
 * Links are drawn from the bottom triangle of a job to the top triangle
 * of its successor jobs, creating a visual representation of the workflow.
 */
function createLinks() {
    for (let job in jobReference) {
        // Get source job and its connection point
        let jobGroup = jobReference[job];
        let x1 = jobGroup.left + jobGroup.connectionPoints.bottom.x;
        let y1 = jobGroup.top + jobGroup.connectionPoints.bottom.y + JOB_LAYOUT.triangle.height - JOB_LAYOUT.triangle.top.offsetY;
        
        // Get all direct successors of the current job
        let Dsucc = graph.getDirectSuccs(job);

        for (let succ of Dsucc) {
            if (!jobReference[succ]) continue;

            // Get target job and its connection point
            let succGroup = jobReference[succ];
            let x2 = succGroup.left + succGroup.connectionPoints.top.x;
            let y2 = succGroup.top + succGroup.connectionPoints.top.y - JOB_LAYOUT.triangle.bottom.offsetY;

            // Create and style the connection line
            const link = new fabric.Line([x1, y1, x2, y2], {
                stroke: JOB_LAYOUT.link.color,
                strokeWidth: JOB_LAYOUT.link.width,
                ...JOB_LAYOUT.link.interaction
            });

            // Store the link for later reference
            linkReference[`${job}_${succ}`] = link;
        }
    }
}

/**
 * Calculates the position for a job within a row of parallel jobs.
 * Ensures even spacing between parallel jobs in the same level.
 * 
 * @function
 * @param {number} x - Center X coordinate of the group
 * @param {number} y - Y coordinate for the current level
 * @param {number} n - Total number of jobs in this level
 * @param {number} t - Zero-based index of the current job
 * @returns {{xCoord: number, yCoord: number}} Coordinates for job placement
 * 
 * @description
 * Calculates job position using the following logic:
 * 1. Converts 0-based index to 1-based for calculations
 * 2. Calculates total width needed for all jobs
 * 3. Determines leftmost position based on center point
 * 4. Computes final position based on job index
 */
function getNthPoint(x, y, n, t) {
    // t is 0-based index, increment it by 1 for our calculations
    t = t + 1;
    
    if (t < 1 || t > n) return { xCoord: x, yCoord: y };

    // Calculate total width needed for all jobs
    const totalWidth = n * (JOB_LAYOUT.width + JOB_LAYOUT.marginX) - JOB_LAYOUT.marginX;
    
    // Start from the leftmost position
    const startX = x - (totalWidth / 2);
    
    // Calculate position for current job
    const xCoord = startX + (t - 1) * (JOB_LAYOUT.width + JOB_LAYOUT.marginX);
    
    return { xCoord, yCoord: y };
}

/**
 * Updates the properties of a specific job in the workflow.
 * This function allows updating status, start time, and end time without redrawing the entire workflow.
 * 
 * @param {string} jobName - The unique identifier of the job to update
 * @param {Object} properties - The properties to update
 * @param {('completed'|'running'|'waiting'|'failed')} [properties.status] - New status of the job
 * @param {string} [properties.startTime] - New start time in string format
 * @param {string} [properties.endTime] - New end time in string format
 * 
 * @example
 * updateJobProperties('build-frontend', {
 *     status: 'completed',
 *     startTime: '2024-03-26 10:00 AM',
 *     endTime: '2024-03-26 11:00 AM'
 * });
 */
function updateJobProperties(jobName, properties) {
    // Get the job group from reference
    const jobGroup = jobReference[jobName];
    if (!jobGroup) return;

    // Get the job data from the map
    const job = jobMap[jobName];
    if (!job) return;

    // Update jobMap with new properties to maintain data consistency
    if (properties.status) job.status = properties.status;
    if (properties.startTime) job.startTime = properties.startTime;
    if (properties.endTime) job.endTime = properties.endTime;

    // Update status color (status bar is the 3rd object in the group - index 2)
    if (properties.status) {
        const statusColor = JOB_LAYOUT.status.colors[properties.status] || JOB_LAYOUT.status.colors.default;
        const statusBar = jobGroup.getObjects()[2];
        statusBar.set('fill', statusColor);
    }

    // Update start time (startValue is the 6th object in the group - index 5)
    if (properties.startTime) {
        const startValue = jobGroup.getObjects()[5];
        startValue.set('text', properties.startTime);
    }

    // Update end time (endValue is the 8th object in the group - index 7)
    if (properties.endTime) {
        const endValue = jobGroup.getObjects()[7];
        endValue.set('text', properties.endTime);
    }

    // Mark the group as dirty and render only the changes
    jobGroup.dirty = true;
    canvas.renderAll();
}

 updateJobProperties('build-frontend', {
    status: 'completed',
    startTime: 'Laxman 2024-03-26 10:00 AM',
    endTime: '2024-03-26 11:00 AM'
 });