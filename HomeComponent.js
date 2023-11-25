const HomeScreen = ({navigation }) => {
    const [inputText, setInputText] = useState('');
  
  //gombnyomás teszt
  const handleButtonPress = () => {
    Alert.alert('Sign In', 'Debugged');
  };

    return (
        <View style={styles.container}>
          <Text>Event Manager Application</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Emaasdasaasarsil"
            onChangeText={(text) => setInputText(text)}
            value={inputText}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Pasdsaadsdsasword"
            onChangeText={(text) => setInputText(text)}
            value={inputText}
          />
          
          <View style={styles.buttonContainer}>
            <Button title="Sign in" onPress={handleButtonPress} />
          </View>
    
          <View style={styles.buttonContainer}>
            <Button 
              title="TESZT"
            >
    
            </Button>
          </View>
    
          <View style={styles.buttonContainer}>
            <Button title="Sign up"/>
          </View>
    
        </View>
      );

}