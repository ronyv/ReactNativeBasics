'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({

  //tab styles
  indicatorContainer: {
        backgroundColor: 0xFFFFFFFF,
        borderTopWidth: 0,
        height: 36,
        paddingTop: 0,
        paddingBottom: 0
    },

    tabTxt: {
        color: '#242b33',
        marginTop: 0,
        fontSize: 12
    },
    selectedTabTxt: {
        color: '#fff',
        marginTop: 0,
        fontSize: 12
    },
    tabItem: {
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 8,
        borderRightWidth:1,
        borderRightColor:'#333e48'
    },
    selectedTabItem: {
        justifyContent: 'space-between',
        paddingBottom: 10,
        paddingTop: 6,
        backgroundColor: '#333e48',
    },
    viewpagerImage: {
        width: '100%',
        height: 300,
        justifyContent: 'center'

      },
  pagerView:{borderTopWidth:1, borderTopColor:'#414a53'},
  pageheader:{color:'#fff',fontSize:14,textAlign:'center',padding:10,},
  colorgreen:{color:'#00d300'},
  colorred:{color:'#f84444'},
  size13:{fontSize:12},
  textGold:{color:'#dfb665',fontWeight:'bold',fontSize:15},
  customFont:{fontFamily: "Roboto-Regular",color:'#fff'},
  width100:{width:70},
  width200:{width:200},
  width60:{width:70,textAlign:'right',fontSize:15},
  width30:{width:15},
  rowstyle:
    {flexDirection: 'row',justifyContent: "space-between",
    padding:15, borderBottomWidth:1, borderBottomColor:'#414a53',paddingBottom:8, paddingTop:8},
  rowheaderstyle:{
    flexDirection: 'row',
    justifyContent: "space-between",
    backgroundColor: '#414a53',padding:15,paddingBottom:10, paddingTop:10
  },
  iconstyle:{
    padding:4,
    fontSize:24,
    color:"#ffffff"
  },
  goldColoricon:{padding:4,
  fontSize:24,color:'#dfb665'},
  iconstyle2:{
    padding:0,
    fontSize:22,
    color:"#ffffff",margin:0
  },
  gridiconstyle:{fontSize:20,
  color:"#ffffff"},
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding:5,
    flex:0,
  },
  container: {
    backgroundColor: '#252d35',
    padding:15,
    flex:1, paddingTop:0
  },
  sortableContainer: {
    backgroundColor: '#252d35',
    padding:0,
    flex:1
  },
  containerinside:{
    backgroundColor: '#333e48',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    borderRadius: 2,
    flex:1, marginTop:15,
    overflow: 'hidden'
  },
  paddingRL10:{paddingRight:10,paddingLeft:10},
  paddingL10:{paddingLeft:10},
  textstyle:{fontSize:13,color:"#ffffff",paddingBottom:10},
  scrollviewstyle:{backgroundColor: '#333e48',padding:15},
  pageheading:{fontSize:16, color:'#fff', textAlign:'center'},
  textalignleft:{textAlign:'left'},
  logo: {width:90, height:90, },
  logocontainer:{justifyContent: "center",alignItems: "center",},
  splashcontainer:{justifyContent: "center",alignItems: "center",flexDirection: 'column',flex:1},
  alignrow:{flexDirection: 'row'},
  navigation:{width:30},
  currnecypair:{flex:1},
  lastupdated:{
    flex:0, alignItems: 'center',
    flexDirection: 'row',borderTopColor:'#555d66', borderTopWidth:.5
  },
  lastupdatedtext:{color:'#c0c0c0',fontSize:12,paddingLeft:10},
});
