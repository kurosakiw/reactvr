import React from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Image,
    Animated
} from 'react-vr';

const bg = {
  layoutOrigin: [0.5, 0.6],
  paddingLeft: 0.2,
  paddingRight: 0.2,
  transform: [{translate: [5, -0.5, -1.3]},{rotateY:-120}],
}

const image = {
  width:1.6,
  height:1.6,
  borderRadius:1
}
export default class WelcomeToVR extends React.Component {
  constructor() {
    super();
    this.state = {
      bounceValue:new Animated.Value(0),
      textColor: 'white'
    };
  }
  render() {
    return (
        <View>
        <Pano source={asset('timgs.jpg')}/>
  <View style={bg}
    onEnter={() => {
      this.setState({textColor: 'red'})
      this.componentDidMount();
    }}
    onExit={() => this.setState({textColor: 'white'})}>
  <Animated.Image style={{
      width: 2.2,
          height: 1.08,
          transform: [
        {scale:this.state.bounceValue},
      ]}} source = { asset('tts.jpg') }/>
  <Text style={{color: this.state.textColor,textAlign:'center'}}>mmp what a bug</Text>
    </View>

    </View>
  );
  }
  componentDidMount() {
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
        this.state.bounceValue,
        {
          toValue: 0.8,
          friction: 1,
        }
    ).start();
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
