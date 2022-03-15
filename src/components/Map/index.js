import { Map, APILoader } from '@uiw/react-baidu-map';
import React from "react";
import './index.less'
export default class MapA extends React.Component{
    render() {
        return (

            <div style={{ width: '100%', height: '90vh' }}>
                <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
                    <Map center="广州"/>
                    {/*<Map center="上海">*/}
                    {/*    {({ BMap, map, container }) => {*/}
                    {/*        return;*/}
                    {/*    }}*/}
                    {/*</Map>*/}
                </APILoader>
            </div>
        );
    }
}

