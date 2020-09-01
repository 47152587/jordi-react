import React, { Component } from "react";
import Datatable from "components/DataTable/Datatable.jsx";

class DataActivity extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            columns: [
                {
                    name: "imageUrl", label: "Image", options: {
                        display: true, customBodyRender: (value, tableMeta, updateValue) => (
                            <img src={value} alt={"Activity"} class={"img-responsive img-rounded"} style={{ maxHeight: "50px", maxWidth: "50px" }}></img>
                        )
                    }
                },
                { name: "id", label: "Id", options: { display: false } },
                { name: "activity", label: "Activity", options: { display: true } },
                { name: "accessibility", label: "Accessibility", options: { display: true } },
                { name: "type", label: "Type", options: { display: true } },
                { name: "participants", label: "Participants", options: { display: true } },
                { name: "price", label: "Price", options: { display: true } }
            ]

        };
    }

    componentDidMount() {
        fetch("https://bored-api.firebaseapp.com/api/activity/list")
            .then(res => res.json())
            .then(
                (result) => {
                    //console.log(result);
                    let activity = [];
                    let x = 1;
                    while (x <= 50) {
                        var rand = result[Math.floor(Math.random() * result.length)];
                        console.log(rand);
                        if (!activity.includes(rand)) {
                            activity.push(rand);
                            x++;
                        }
                    }
                    //console.log(activity);
                    this.setState({
                        isLoaded: true,
                        items: activity
                    });

                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }

            )
        console.log('Final state: ' + this.state.items);

    }


    render() {
        const { error, isLoaded, items, columns, title } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="content">
                    <Datatable data={items} header={columns} title={title} />
                </div>
            );
        }
    }
    /*  return (

          <div className="content">
              <Datatable data={items} />
          </div>
      );
  }*/
}

export default DataActivity;
