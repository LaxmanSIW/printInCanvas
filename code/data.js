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

 class Graph {
    constructor() {
        this.adjacencyList = new Map();
        this.reverseAdjList = new Map(); // For efficient predecessor lookups
    }

    addEdge(source, target) {
        // Forward edge
        if (!this.adjacencyList.has(source)) {
            this.adjacencyList.set(source, new Set());
        }
        if (!this.adjacencyList.has(target)) {
            this.adjacencyList.set(target, new Set());
        }
        this.adjacencyList.get(source).add(target);

        // Reverse edge for predecessor lookups
        if (!this.reverseAdjList.has(target)) {
            this.reverseAdjList.set(target, new Set());
        }
        if (!this.reverseAdjList.has(source)) {
            this.reverseAdjList.set(source, new Set());
        }
        this.reverseAdjList.get(target).add(source);
    }

    getDirectSuccs(vertex) {
        return Array.from(this.adjacencyList.get(vertex) || []);
    }

    getDirectPreds(vertex) {
        return Array.from(this.reverseAdjList.get(vertex) || []);
    }

    getAllDescendantsFurthest(root) {
        return this.traverseGraph(root, this.adjacencyList);
    }

    getAllAncestorsFurthest(leaf) {
        return this.traverseGraph(leaf, this.reverseAdjList);
    }

    // Helper method for graph traversal
    traverseGraph(startVertex, adjList) {
        const visited = new Map();
        const queue = [{vertex: startVertex, level: 0}];
        visited.set(startVertex, {level: 0});

        while (queue.length > 0) {
            const {vertex, level} = queue.shift();
            const neighbors = Array.from(adjList.get(vertex) || []);

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor) || visited.get(neighbor).level < level + 1) {
                    visited.set(neighbor, {level: level + 1});
                    queue.push({vertex: neighbor, level: level + 1});
                }
            }
        }

        return visited;
    }
}

export { GROUP_LAYOUT, JOB_LAYOUT, jobMap, groupMap, pred_succ_rel, Graph };    