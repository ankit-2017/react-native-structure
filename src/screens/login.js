import React, {PureComponent, Component} from 'react';
import {SafeAreaView, Text, TouchableHighlight, View} from 'react-native';
import {ButtonPrimary, StyledText} from '_atoms/button';
import {Container} from '_atoms/common';
import {Image, Thumbnail, Button} from 'native-base';
import {AuthSaga} from '_sagas/authSaga';
import {connect} from 'react-redux';

class LoginScreen extends Component {
  callUsers = () => {
    // console.log(testAction(null));
    // AuthSaga;
  };
  render() {
    return (
      <Container>
        <View>
          <StyledText>Welcome to React Native structure</StyledText>
        </View>
        <Thumbnail
          round
          source={{uri: 'https://tineye.com/images/widgets/mona.jpg'}}
          style={{height: 150, width: 150}}
        />
        <ButtonPrimary
          text="click me"
          textColor="#fff"
          backgroundColor="#3366ff"
          onPress={() => this.props.navigation.navigate('App')}
        />
        <ButtonPrimary
          text="call users"
          textColor="#fff"
          backgroundColor="#3366ff"
          onPress={() => this.callUsers()}
        />
      </Container>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(LoginScreen);
