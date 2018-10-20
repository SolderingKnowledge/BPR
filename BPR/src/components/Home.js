
import React, { Component } from 'react';
import DataList from '../data/data.json';

import Detail from '../components/Post';

class Home extends Component {
  constructor (props) {
    super(props)
    this.getJson = this.getJson.bind(this)
  }
  getJson(json_message){
    alert(json_message)
  }

  render () {
    return (
      <div className='center'>
        {DataList.map((DataList, index) => {
          return <Detail backEnd_json={DataList} key={`list-api-key ${index}`} json_coming = {this.getJson} /> })
        }
      </div>
    )
  }
}

export default Home;
