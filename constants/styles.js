import { Dimensions } from "react-native";

export default {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },
    contentContainer: {
        paddingTop: 30,
        alignItems: 'center',
    },
    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        lineHeight: 24,
        textAlign: 'center',
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: 'rgba(96,100,109, 1)',
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#5CAA47',
    },
    addButton: {
        height: Dimensions.get('window').width * 0.25,
        width: "25%",
        marginTop: 10,
        backgroundColor: "#5CAA47",
        borderColor: "#5CAA47",
        borderWidth: 1,
        borderRadius: Dimensions.get('window').width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listButton: {
        height: 100,
        width: "90%",
        marginTop: 10,
        backgroundColor: "#5CAA47",
        alignItems: 'center'
    },
    listContainer: {
        height: 100,
        width: "90%",
        paddingLeft: 10,
        marginTop: 10,
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        borderWidth: 1,
        borderColor: "#5CAA47",
        backgroundColor: "#5CAA47",
        borderRadius: 3,
        textAlignVertical: 'center',
        justifyContent: 'center'
    },
    listItemText: {
        width: '80%',
        fontSize: 30,
        fontWeight: 'bold',
        flex: 0,
        color: '#B12264',
        textAlign: 'left',
        textAlignVertical: 'center'
    },
    searchBox: {
        height: 80,
        width: "50%",
        paddingLeft: 10,
        marginTop: 10,
        backgroundColor: "#dddddd",
        borderRadius: 10,
    },
    searchContainer: {
        height: 90,
        width: "90%",
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    personalize: {
        height: 80,
        width: "30%",
        marginTop: 10,
        paddingTop: 30,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#5CAA47",
        alignItems: 'center',
        borderRadius: 5,
    },
};