import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  SafeAreaView,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Note extends React.Component {
  render() {
    const {isDone, task} = this.props.note;
    return (
      <View
        style={[
          styles.container,
          isDone ? styles.completedNote : styles.pendingNote,
        ]}>
        <Text style={styles.noteStyle}>{task}</Text>
        <View style={styles.operationContainer}>
          {!isDone ? (
            <TouchableOpacity>
              <Icon
                name="check-circle"
                size={30}
                color="green"
                onPress={this.props.completeNote}
              />
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity style={{paddingHorizontal: 10}}>
            <Icon
              name="trash"
              size={30}
              color="red"
              onPress={this.props.deleteNote}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin: 5,
    paddingVertical: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  completedNote: {
    backgroundColor: '#a6ffbe',
  },
  pendingNote: {
    backgroundColor: 'white',
  },
  operationContainer: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  noteStyle: {
    fontSize: 20,
  },
});
