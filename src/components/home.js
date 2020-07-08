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
import Note from './note';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      note: {},
    };
  }

  addNote = () => {
    this.setState({noteArray: [...this.state.noteArray, this.state.note]});
  };

  deleteNote = (idx) => {
    const noteArray = this.state.noteArray;
    noteArray.splice(idx, 1);
    this.setState({noteArray});
  };

  completeNote = (idx) => {
    let noteArray = this.state.noteArray;
    noteArray[idx].isDone = true;
    this.setState({noteArray});
  };

  render() {
    const notes = this.state.noteArray.map((key, idx) => {
      return (
        <Note
          key={idx}
          note={key}
          deleteNote={() => this.deleteNote(idx)}
          completeNote={() => this.completeNote(idx)}
        />
      );
    });
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>TODOs</Text>
        </View>
        <ScrollView style={styles.scrollViewContainer}>{notes}</ScrollView>
        <View style={styles.footerContainer}>
          <TextInput
            style={styles.footerText}
            placeholder="Enter note"
            placeholderTextColor="black"
            onChangeText={(text) =>
              this.setState({note: {task: text, isDone: false}})
            }
            value={this.state.note.task}
          />
          <TouchableOpacity style={styles.addButton} onPress={this.addNote}>
            <Text style={styles.button}>+</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#d62486',
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
    flex: 0.1,
  },
  headerText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '800',
    color: 'black',
    paddingVertical: 20,
  },
  footerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 5,
    borderRadius: 20,
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    borderColor: 'black',
    borderWidth: 1,
    paddingVertical: 0,
  },
  footerText: {
    fontSize: 25,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 10,
  },
  addButton: {
    borderRadius: 100,
    backgroundColor: '#d62486',
    alignItems: 'center',
    width: 38,
    height: 38,
  },
  button: {
    textAlign: 'center',
    paddingTop: 5,
    fontSize: 20,
  },
  scrollViewContainer: {
    flex: 0.8,
  },
});
