import React from 'react';
import $ from 'jquery';
import NewsItem from './news-item';

class NewsItems extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            data : []
        }

        this.getNewsItems();
    }

    getNewsItems() {
        var component = this;
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function (data) {
                console.log('Setting State');
                console.log(data);
                console.log(this);
                this.setState({data: data});
                console.log('completed seting state');
            }.bind(component),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(component)
        });
    }
    
    render() {
        console.log(this);
        console.log(this.state);
        var children = [];

        for (var i=0; i<this.state.data.length; i++)
        {
            var item = this.state.data[i];
            console.log(item);
            children.push(<NewsItem headline={item.headline} body={item.body} />);
        }

        return (
            <div className="news-items">
                <div className="o-layout">
                {children}
                </div>
            </div>
        );
    }

}

export default NewsItems;
