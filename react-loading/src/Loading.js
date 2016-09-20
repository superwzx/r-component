import React, {Component, PropTypes} from 'react';

class Loading extends Component {
    static propTypes = {
        outerCustom: PropTypes.object,
        innerCustom: PropTypes.object,
        pointCustom: PropTypes.object,
        background: PropTypes.string,
        percent: PropTypes.number
    };
    static defaultProps = {
        percent: 0
    };
    componentDidMount = () => {
        let start = 0, end = 0;
        const dom = document.querySelector('.loading-point');
        const mouseMove = function (event) {
            event.preventDefault();
            let outWidth = document.querySelector('.loading-wrap').clientWidth;
            let left = dom.offsetLeft + dom.clientWidth/2;
            end = event.offsetX;
            let distance = end - start + left;
            if(distance < 0) {
                distance = 0;
            } else if (distance > outWidth) {
                distance = outWidth;
            }
            dom.style.left = distance + 'px';
            document.querySelector('.loading-inner').style.width = distance + 'px';
        };
        dom.addEventListener('mousedown', function (event) {
            event.preventDefault();
            start = event.offsetX;
            dom.addEventListener('mousemove', mouseMove, false);
        }, false);
        
        dom.addEventListener('mouseup', function (event) {
            event.preventDefault();
            dom.removeEventListener('mousemove', mouseMove, false);
        }, false);

    }
    render () {
        const {
            outerCustom,
            innerCustom,
            pointCustom,
            background,
            percent,
            ...other
        } = this.props;
        const innerStyle = Object.assign({},innerCustom,{width: percent+'%',background: background});
        const pointStyle = Object.assign({},pointCustom,{left: percent+'%',background: background});
        return (
            <div className="loading-wrap" style={outerCustom}>
                <div className="loading-inner" style={innerStyle}></div>
                <div className="loading-point" style={pointStyle}></div>
            </div>
        )
    }
}

export default Loading;