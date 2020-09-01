import React, { Component } from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme } from '@material-ui/core/styles';


class DataTable extends Component {
    constructor(props) {
        super(props);
        console.log("DataTable " + props.data + " Header " + props.header + " Title " + props.title);
        this.state = {
            items: props.data,
            columns: props.header,
            title: props.title
        };

    }

    getMuiTheme = () => createMuiTheme({
        overrides: {
            MUIDataTableBodyCell: {
                root: {
                    backgroundColor: "#FF0000",
                    fontSize: "1.25em"
                }
            }
        }
    });

    render() {
        const {  items, columns, title } = this.state;
        const options = {
            filterType: "dropdown",
            responsive: "scroll"
        };

        return (
            <MUIDataTable theme={this.getMuiTheme()}
                title={title}
                data={items}
                columns={columns}
                options={options}
            />
        );
    }
}
export default DataTable;