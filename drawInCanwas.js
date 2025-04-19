/**
 * Configuration for group layout including dimensions, styling, and interaction properties.
 * Controls the appearance and behavior of workflow groups that contain jobs.
 * 
 * @type {Object}
 * @property {Object} dimensions - Main sizing and spacing properties
 * @property {number} dimensions.startX - Initial X coordinate for first group
 * @property {number} dimensions.startY - Initial Y coordinate for first group
 * @property {number} dimensions.topJob - Space between group header and first job
 * @property {number} dimensions.marginX - Horizontal spacing between groups
 * 
 * @property {Object} interaction - Group-level interaction controls
 * @property {boolean} interaction.selectable - Whether group can be selected
 * @property {boolean} interaction.evented - Whether group responds to events
 * @property {string} interaction.hoverCursor - Cursor style on hover
 * 
 * @property {Object} container - Group container styling
 * @property {string} container.background - Background color
 * @property {Object} container.border - Border properties
 * @property {Object} container.shadow - Shadow properties
 * 
 * @property {Object} header - Group header section styling
 * @property {number} header.height - Header height
 * @property {string} header.background - Header background color
 * @property {Object} header.title - Title text properties
 * 
 * @property {Object} status - Group status bar properties
 * @property {number} status.height - Status bar height
 * @property {number} status.offsetY - Y offset from group top
 * @property {Object} status.colors - Status color mappings
 */
const GROUP_LAYOUT = {
    // Main dimensions and spacing
    dimensions: {
        startX: 100,
        startY: 80,
        topJob: 80,
        marginX: 40
    },

    // Interaction controls
    interaction: {
        selectable: false,
        evented: false,
        hoverCursor: 'default'
    },

    // Main group container
    container: {
        background: '#ffffff',
        border: {
            color: '#cbd5e1',
            width: 1.5,
            radius: 8
        },
        shadow: {
            color: 'rgba(0,0,0,0.1)',
            blur: 15,
            offsetX: 0,
            offsetY: 2
        },
        interaction: {
            selectable: false,
            evented: false,
            hoverCursor: 'default'
        }
    },

    // Header section
    header: {
        height: 50,
        background: '#f1f5f9',
        border: {
            color: '#cbd5e1',
            width: 1,
            radius: 8
        },
        title: {
            fontSize: 18,
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            fontWeight: '600',
            color: '#344054',
            charSpacing: 0.2,
            paddingX: 16,
            paddingY: 14
        },
        interaction: {
            selectable: false,
            evented: false,
            hoverCursor: 'default'
        }
    },

    // Status bar
    status: {
        height: 4,
        offsetY: 52,
        colors: {
            waiting: '#ffd700',
            completed: '#10b981',
            running: '#2563eb',
            failed: '#ef4444'
        },
        border: {
            width: 0
        },
        interaction: {
            selectable: false,
            evented: false,
            hoverCursor: 'default'
        }
    }
};

/**
 * Configuration for job card layout including dimensions, styling, and interaction properties.
 * Controls the appearance and behavior of individual job cards within groups.
 * 
 * @type {Object}
 * @property {number} width - Width of job card
 * @property {number} height - Height of job card
 * @property {number} marginX - Horizontal spacing between jobs
 * @property {number} marginY - Vertical spacing between jobs
 * 
 * @property {Object} interaction - Job-level interaction controls
 * @property {boolean} interaction.selectable - Whether job can be selected
 * @property {boolean} interaction.evented - Whether job responds to events
 * @property {string} interaction.hoverCursor - Cursor style on hover
 * 
 * @property {Object} card - Main card appearance
 * @property {string} card.background - Card background color
 * @property {string} card.borderColor - Card border color
 * @property {number} card.borderWidth - Card border width
 * @property {Object} card.shadow - Card shadow properties
 * 
 * @property {Object} title - Job title styling
 * @property {Object} status - Status bar properties
 * @property {Object} divider - Divider line properties
 * @property {Object} timeSection - Time section styling
 * @property {Object} triangle - Connection triangle properties
 * @property {Object} link - Connection line properties
 */
const JOB_LAYOUT = {
    // Main card dimensions
    width: 280,
    height: 160,
    marginX: 50,
    marginY: 80,

    // Interaction controls
    interaction: {
        selectable: false,
        evented: false,
        hoverCursor: 'default'
    },

    // Main card appearance
    card: {
        background: '#ffffff',
        borderColor: '#94a3b8',
        borderWidth: 1.5,
        cornerRadius: 6,
        shadow: {
            color: 'rgba(0,0,0,0.06)',
            blur: 8,
            offsetX: 0,
            offsetY: 1
        },
        interaction: {
            selectable: false,
            evented: false,
            hoverCursor: 'default'
        }
    },

    // Title section
    title: {
        fontSize: 15,
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        fontWeight: '500',
        color: '#334155',
        paddingX: 16,
        paddingY: 14,
        charSpacing: 0.2,
        interaction: {
            selectable: false,
            evented: false,
            hoverCursor: 'default'
        }
    },

    // Status bar
    status: {
        height: 4,
        y: 45,
        colors: {
            completed: '#10b981',
            running: '#2563eb',
            waiting: '#f59e0b',
            failed: '#ef4444',
            default: '#ffd700'
        },
        interaction: {
            selectable: false,
            evented: false,
            hoverCursor: 'default'
        }
    },

    // Divider line
    divider: {
        y: 85,
        color: '#94a3b8',
        width: 1,
        interaction: {
            selectable: false,
            evented: false,
            hoverCursor: 'default'
        }
    },

    // Time section
    timeSection: {
        y: 105,
        label: {
            fontSize: 13,
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            color: '#334155',
            charSpacing: 0.2,
            interaction: {
                selectable: false,
                evented: false,
                hoverCursor: 'default'
            }
        },
        value: {
            fontSize: 13,
            fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
            color: '#475569',
            charSpacing: 0.2,
            xOffset: 60,
            interaction: {
                selectable: false,
                evented: false,
                hoverCursor: 'default'
            }
        },
        rowSpacing: 20
    },

    // Connection triangles
    triangle: {
        width: 20,
        height: 18,
        color: '#94a3b8',
        top: {
            offsetY: 2
        },
        bottom: {
            offsetY: 2
        },
        interaction: {
            selectable: false,
            evented: false,
            hoverCursor: 'default'
        }
    },

    // Link properties
    link: {
        color: '#94a3b8',
        width: 1,
        interaction: {
            selectable: false,
            evented: false,
            hoverCursor: 'default'
        }
    }
};

// Sample job data with parallel jobs in same groups
const jobMap = {
    // Development Level 1
    'build-frontend': { groupName: 'Development', status: 'completed', startTime: '3/25/2025, 08:00 AM', endTime: '3/25/2025, 09:00 AM' },
    'build-backend': { groupName: 'Development', status: 'completed', startTime: '3/25/2025, 08:00 AM', endTime: '3/25/2025, 09:00 AM' },
    'build-api': { groupName: 'Development', status: 'completed', startTime: '3/25/2025, 08:00 AM', endTime: '3/25/2025, 09:00 AM' },
    
    // Development Level 2
    'package-frontend': { groupName: 'Development', status: 'running', startTime: '3/25/2025, 09:15 AM', endTime: '3/25/2025, 10:00 AM' },
    'package-backend': { groupName: 'Development', status: 'running', startTime: '3/25/2025, 09:15 AM', endTime: '3/25/2025, 10:00 AM' },
    'package-api': { groupName: 'Development', status: 'running', startTime: '3/25/2025, 09:15 AM', endTime: '3/25/2025, 10:00 AM' },
    
    // Testing Level 1
    'test-frontend': { groupName: 'Testing', status: 'waiting', startTime: '3/25/2025, 10:15 AM', endTime: '3/25/2025, 11:00 AM' },
    'test-backend': { groupName: 'Testing', status: 'waiting', startTime: '3/25/2025, 10:15 AM', endTime: '3/25/2025, 11:00 AM' },
    'test-api': { groupName: 'Testing', status: 'waiting', startTime: '3/25/2025, 10:15 AM', endTime: '3/25/2025, 11:00 AM' },
    
    // Testing Level 2
    'integration-test': { groupName: 'Testing', status: 'waiting', startTime: '3/25/2025, 11:15 AM', endTime: '3/25/2025, 12:00 PM' },
    'performance-test': { groupName: 'Testing', status: 'waiting', startTime: '3/25/2025, 11:15 AM', endTime: '3/25/2025, 12:00 PM' },
    
    // Deployment Level 1
    'deploy-staging': { groupName: 'Deployment', status: 'waiting', startTime: '3/25/2025, 13:00 PM', endTime: '3/25/2025, 14:00 PM' },
    'deploy-qa': { groupName: 'Deployment', status: 'waiting', startTime: '3/25/2025, 13:00 PM', endTime: '3/25/2025, 14:00 PM' },
    
    // Deployment Level 2
    'deploy-prod': { groupName: 'Deployment', status: 'waiting', startTime: '3/25/2025, 14:15 PM', endTime: '3/25/2025, 15:00 PM' }
};

const groupMap = {
    'Development': { width: 0, levels: {}, jobs: [] },
    'Testing': { width: 0, levels: {}, jobs: [] },
    'Deployment': { width: 0, levels: {}, jobs: [] }
};

// Define job dependencies to create parallel workflows
const pred_succ_rel = [
    // Development Level 1 to Level 2
    ['build-frontend', 'package-frontend'],
    ['build-backend', 'package-backend'],
    ['build-api', 'package-api'],
    
    // Development to Testing
    ['package-frontend', 'test-frontend'],
    ['package-backend', 'test-backend'],
    ['package-api', 'test-api'],
    
    // Testing Level 1 to Level 2
    ['test-frontend', 'integration-test'],
    ['test-backend', 'integration-test'],
    ['test-api', 'integration-test'],
    ['test-frontend', 'performance-test'],
    ['test-backend', 'performance-test'],
    ['test-api', 'performance-test'],
    
    // Testing to Deployment
    ['integration-test', 'deploy-staging'],
    ['performance-test', 'deploy-staging'],
    ['integration-test', 'deploy-qa'],
    ['performance-test', 'deploy-qa'],
    
    // Final deployment
    ['deploy-staging', 'deploy-prod'],
    ['deploy-qa', 'deploy-prod']
];

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

/**
 * Graph class for managing job dependencies and relationships.
 * Implements methods for adding edges and traversing the workflow graph.
 * 
 * @class
 * @description
 * Provides functionality for:
 * 1. Adding directed edges between jobs
 * 2. Finding direct successors of a job
 * 3. Calculating furthest descendants and their levels
 */
class Graph {
    constructor() {
        this.adjacencyList = new Map();
    }

    addEdge(source, target) {
        if (!this.adjacencyList.has(source)) {
            this.adjacencyList.set(source, new Set());
        }
        if (!this.adjacencyList.has(target)) {
            this.adjacencyList.set(target, new Set());
        }
        this.adjacencyList.get(source).add(target);
    }

    getDirectSuccs(vertex) {
        return Array.from(this.adjacencyList.get(vertex) || []);
    }

    getAllDescendantsFurthest(root) {
        const visited = new Map();
        const queue = [{vertex: root, level: 0}];
        visited.set(root, {level: 0});

        while (queue.length > 0) {
            const {vertex, level} = queue.shift();
            const successors = this.getDirectSuccs(vertex);

            for (const succ of successors) {
                if (!visited.has(succ) || visited.get(succ).level < level + 1) {
                    visited.set(succ, {level: level + 1});
                    queue.push({vertex: succ, level: level + 1});
                }
            }
        }

        return visited;
    }
}

// Helper functions
function setScrollForCanvas() {
    if (!canvas) return;
    
    const padding = 100;
    const zoom = Math.min(
        (canvas.width - padding) / (canvasWidth || canvas.width),
        (canvas.height - padding) / (canvasHeight || canvas.height)
    );
    
    if (zoom < 1) {
        canvas.setZoom(zoom);
        canvas.setViewportTransform([
            zoom,
            0,
            0,
            zoom,
            padding/2,
            padding/2
        ]);
    }
}

function groupClick(group) {
    console.log('Group clicked:', group);
    // Add your group click handling logic here
}

function jobRightClick(e, jobName) {
    e.preventDefault(); // Prevent default context menu
    console.log('Job right clicked:', jobName);
    // Add your job right-click handling logic here
}

function highlightSelected(jobName) {
    // Clear previous selections
    lastSelectedObj.jobs.forEach(job => {
        if (jobReference[job]) {
            jobReference[job].item(0).set('stroke', JOB_LAYOUT.card.borderColor);
        }
    });
    
    // Highlight new selection
    if (jobReference[jobName]) {
        jobReference[jobName].item(0).set('stroke', '#007bff');
        lastSelectedObj.jobs = [jobName];
    }
    
    canvas.renderAll();
}

window.addEventListener('load', function() {
    // Wait a bit for the DOM to be fully ready
    setTimeout(() => {
        initializeCanvas();
    }, 100);
});

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

    setupCanvasInteractions();
    initializeWorkflow();
}

/**
 * Sets up canvas interaction handlers for panning and zooming.
 * Configures mouse events and viewport transformations.
 * 
 * @function
 * @description
 * Sets up the following interactions:
 * 1. Pan functionality:
 *    - Mouse down: Start dragging
 *    - Mouse move: Update viewport position
 *    - Mouse up: End dragging
 * 2. Zoom functionality:
 *    - Mouse wheel: Zoom in/out around mouse position
 * 3. Window resize handling:
 *    - Updates canvas dimensions
 *    - Maintains proper scroll and zoom
 */
function setupCanvasInteractions() {
    let isDragging = false;
    let lastPosX;
    let lastPosY;

    // Pan functionality
    canvas.on('mouse:down', function(opt) {
        isDragging = true;
        canvas.selection = false;
        lastPosX = opt.e.clientX;
        lastPosY = opt.e.clientY;
        canvas.defaultCursor = 'grabbing';
    });

    canvas.on('mouse:move', function(opt) {
        if (isDragging) {
            const vpt = this.viewportTransform;
            vpt[4] += opt.e.clientX - lastPosX;
            vpt[5] += opt.e.clientY - lastPosY;
            lastPosX = opt.e.clientX;
            lastPosY = opt.e.clientY;
            this.requestRenderAll();
        }
    });

    canvas.on('mouse:up', function() {
        isDragging = false;
        canvas.selection = false;
        canvas.defaultCursor = 'grab';
    });

    // Zoom functionality
    canvas.on('mouse:wheel', function(opt) {
        const delta = opt.e.deltaY;
        let zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        
        canvas.zoomToPoint({ x: opt.e.offsetX, y: opt.e.offsetY }, zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        canvas.setWidth(width);
        canvas.setHeight(height);
        canvas.requestRenderAll();
        setScrollForCanvas();
    });

    canvas.defaultCursor = 'grab';
}

// Helper function to check if an element is part of a job
function isPartOfJob(target) {
    // Check if the target or its parent group is a job
    if (!target) return false;
    
    // If target is part of a group with jobName, it's a job element
    if (target.group && target.group.jobName) {
        return true;
    }
    
    // If target itself is a group with jobName, it's a job
    if (target.jobName) {
        return true;
    }
    
    return false;
}

// Helper function to find the job name from a target
function findJobName(target) {
    if (!target) return null;
    
    // If target is part of a group
    if (target.group && target.group.jobName) {
        return target.group.jobName;
    }
    
    // If target itself is a group
    if (target.jobName) {
        return target.jobName;
    }
    
    return null;
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
    setScrollForCanvas();
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
    setScrollForCanvas();
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