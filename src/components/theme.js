import { createMuiTheme } from "@material-ui/core/styles"

export default createMuiTheme({
    palette: {
        primary: {
            main: "#1943EF",
        },
        secondary: {
            main: "#4AD295",
            light: "rgb(8, 253, 216)"
        },
        error: {
            main: '#ff0000'
        }
    },
    overrides: {
        MuiButton: {
            root: {
                minWidth: '0px',
                fontFamily: 'Camphor, Open Sans, Segoe UI, sans-serif',
                borderRadius: '5px',
                textTransform: 'unset',
                padding: '12px 32px'
            },
/*             containedPrimary: {
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                color: '#fff',
                '&:hover': {
                    transform: 'translateY(-1px)',
                    backgroundColor: "#5e7bf3",
                },
            }, */
            containedSecondary: {
                color: '#fff',
                background: '#3ecf8e',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                fontWeight: 700,
                '&:hover': {
                    boxShadow: '0 14px 26px -12px #4AD295, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 10px 12px -7px rgba(54, 244, 191, 0.3)',
                    backgroundColor: "#4AD295",
                },
            },
        },
    }
});