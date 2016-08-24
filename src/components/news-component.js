import React from 'react';
import NewsItems from './news-items';

class NewsComponent extends React.Component {

    render() {
        return (
            <div className="news-component">
                    <NewsItems url={this.props.url} />
            </div>
        );
    }

}

export default NewsComponent;
