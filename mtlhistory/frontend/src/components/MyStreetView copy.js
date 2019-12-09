
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

class MyStreetView extends Component {

    //answer to google maps in react
    //https://stackoverflow.com/questions/48493960/using-google-map-in-react-component

    //refs
    //https://reactjs.org/docs/refs-and-the-dom.html
    /*
    //https://dev.to/rihdusr/render-a-react-component-in-google-map-171o
    //https://stackoverflow.com/questions/55248483/react-ref-current-is-null

    state = {
        mapIsReady: false
    }

    
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBMNy2d4VK0AWVfUSDYe3luvrFykVhNsZk";
        script.async = true;
        script.addEventListener('load', () => {
            this.setState({ mapIsReady: true })
        })
        document.body.appendChild(script);
    }
 

    //MAIN ISSUE IS THAT COMPONENT DID MOUNT IS NOT BEING CALLED

    //overlays? https://dev.to/rihdusr/render-a-react-component-in-google-map-171o
 */

    constructor(props) {
        super(props)

        this.state = {
            mapDiv: null,
            panDiv: null
        }


        //this.mapDiv = React.createRef()
        //this.panDiv = React.createRef()

        this.setMapDiv = element => {
            this.setState({
                mapDiv: element.current
            })
        }

        this.setPanDiv = element => {
            this.setState({
                panDiv: element.current
            })
        }


    }

    componentDidMount() {

        console.log('SANITY CHECK')

        // for some reason what I write here just doesn't get executed
        this.setState({
            mapDiv: this.mapDiv.current,
            panDiv: this.panDiv.current,
        });
        console.log('mounted')
    }
    render() {

        console.log(this.state)
        console.log(this.props.coordinates)

        var { lat, lng } = this.props.coordinatesObject
        //const coordinates = { lat: 42.345573, lng: -71.098326 };
        const coordinates = { lat: parseFloat(lat), lng: parseFloat(lng) };

        var map = new google.maps.Map(this.state.mapDiv, {
            center: coordinates,
            zoom: 14
        });

        console.log(coordinates)

        //const panorama = new window.google.maps.StreetViewPanorama(document.getElementById('pano'), {
        const panorama = new window.google.maps.StreetViewPanorama(this.state.panDiv, {
            //position: { lat, lng },
            position: coordinates,
            pov: {
                heading: 34, pitch: 10
            }
        });

        map.setStreetView(panorama);

        return (
            <div>
                <div id="map" ref={this.setMapDiv}></div>

                <div id="pano" ref={this.setPanDiv}></div>
            </div>
        )
    }
}

/*
const mapStateToProps = state => ({
    panoramaReady: state.streetview.getPanorama
})

export default connect(mapStateToProps)(MyStreetView)

*/

export default MyStreetView


