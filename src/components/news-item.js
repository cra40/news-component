import React from 'react';

class NewsItem extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="o-layout__item  u-width-1/3@medium">
                <article className="c-tile  c-tile--square">
                    <a href="#0" className="c-tile__link  c-shine-context">
                        <div className="c-tile__content">
                            <div className="c-tile__media">
                                <img className="c-tile__poster" src="//www.sky.com/assets2/dcs-legends-of-tomorrow-tile-51653b6f.png?downsize=768px:*&amp;output-format=jpg" alt="Legends of Tomorrow" />
                            </div>
                            <div className="c-tile__caption c-tile__body">
                                <h1 className="c-tile__small-title">{this.props.headline}</h1>
                                <p>{this.props.body}</p>
                            </div>
                        </div>
                        <div className="c-shine c-tile__shine  c-tile__shine--top">
                            <div className="c-shine__rail"></div>
                        </div>
                        <div className="c-shine c-shine--rev  c-tile__shine  c-tile__shine--bottom">
                            <div className="c-shine__rail"></div>
                        </div>
                    </a>

                </article>
            </div>
        );
    }

}

export default NewsItem;