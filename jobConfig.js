// Theme colors for the entire application
const THEME = {
    colors: {
        primary: '#2563eb',      // Main brand color
        success: '#10b981',      // For completed status
        warning: '#f59e0b',      // For waiting status
        danger: '#ef4444',       // For failed status
        neutral: {
            50: '#f8fafc',       // Lightest background
            100: '#f1f5f9',      // Light background
            200: '#e2e8f0',      // Borders light
            300: '#cbd5e1',      // Borders medium
            400: '#94a3b8',      // Borders dark
            500: '#64748b',      // Text light
            600: '#475569',      // Text medium
            700: '#334155',      // Text dark
        },
        shadows: {
            light: 'rgba(0,0,0,0.06)',
            medium: 'rgba(0,0,0,0.1)'
        }
    },
    typography: {
        fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
        spacing: 0.2
    }
};

// Group container layout configuration
const GROUP_CONTAINER = {
    spacing: {
        startX: 100,            // Initial X position
        startY: 80,            // Initial Y position
        marginX: 40,           // Horizontal spacing between groups
        topJobOffset: 100      // Space before first job in group
    },
    header: {
        height: 50,            // Header section height
        statusHeight: 4,       // Status indicator height
        fontSize: 18          // Group title font size
    },
    appearance: {
        background: THEME.colors.neutral[50],
        headerBg: THEME.colors.neutral[100],
        border: THEME.colors.neutral[300],
        shadow: THEME.colors.shadows.medium
    }
};

// Job card layout and styling
const JOB_CARD = {
    dimensions: {
        width: 280,           // Card width
        height: 160,         // Card height
        spacing: {
            horizontal: 50,   // Space between cards horizontally
            vertical: 60     // Space between cards vertically
        },
        padding: {
            x: 16,          // Internal horizontal padding
            y: 14           // Internal vertical padding
        },
        cornerRadius: 6     // Border radius
    },
    typography: {
        title: {
            size: 15,
            weight: '500'
        },
        content: {
            size: 13
        }
    },
    sections: {
        title: {
            height: 40     // Space for title
        },
        status: {
            position: 55,  // Y position from top
            height: 5     // Status bar height
        },
        divider: {
            position: 65,  // Y position from top
            color: THEME.colors.neutral[200]
        },
        content: {
            position: 80   // Y position for content start
        }
    },
    connector: {
        triangle: {
            width: 20,
            height: 16
        },
        line: {
            width: 2,
            color: THEME.colors.neutral[400]
        }
    },
    states: {
        completed: {
            color: THEME.colors.success,
            label: 'Completed'
        },
        running: {
            color: THEME.colors.primary,
            label: 'Running'
        },
        waiting: {
            color: THEME.colors.warning,
            label: 'Waiting'
        },
        failed: {
            color: THEME.colors.danger,
            label: 'Failed'
        }
    },
    appearance: {
        background: THEME.colors.neutral[50],
        border: THEME.colors.neutral[400],
        text: THEME.colors.neutral[700],
        shadow: THEME.colors.shadows.light
    }
};

// Sample job data structure
const JOB_TEMPLATE = {
    id: '',                    // Unique identifier
    title: '',                // Job name/title
    group: '',                // Group this job belongs to
    status: 'waiting',        // Current status
    timing: {
        start: null,          // Start time
        end: null,           // End time
        duration: null       // Duration in milliseconds
    },
    dependencies: {
        previous: [],        // IDs of jobs that must complete before this
        next: []            // IDs of jobs that depend on this
    },
    metadata: {
        type: '',           // Type of job
        priority: 'normal', // Job priority
        owner: '',         // Job owner
        tags: []          // Additional categorization
    }
};

export { THEME, GROUP_CONTAINER, JOB_CARD, JOB_TEMPLATE }; 