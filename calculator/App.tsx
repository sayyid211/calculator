/**
 * Simple calculator 
 * https://github.com/facebooksayyid211/calculator/calculator
 *
 */

/*import react package*/
import React, {useState} from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
} from 'react-native';

/*import math to enable arithmetic operations */

import math from 'mathjs';

const Cal = () => {
  //state variable to store expression to be evaluated
  const [expression, setExpression] = useState('');

  // handle button press
  const handleButtonPress = (value) => {
    if(value === '='){
      // return result of math operation
      getResult();

    }else {
      //add button value to expression
      setExpression(expression + value);
    }
    
  };

  const getResult = () => {
    try {
      //compute result using mathjs library
      const result = math.evaluate(expression);
      //update expression with the result as string
      setExpression(result.toSring());
    } catch (error) {
      //print error if expression contains error
      setExpression('Error');
    }
  };
  //buttons array
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ];

  return(
    <View style={styles.container}>
      {/*display expression on screen*/}
      <Text style={styles.expression}>{expression}</Text>
      <View style={styles.buttonContainer}>
        {/*map through buttons and give them touchable opacity*/}
        {
          buttons.map((button) => (
            <TouchableOpacity
            key={button}
            style={styles.button}
            onPress={() => handleButtonPress(button)}
            >
              {/* display button value*/}
              <Text style={styles.buttonText}>{button}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </View>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expression: {
    fontSize: 36,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonText: {
    fontSize: 24,
  },
});
export default Cal;