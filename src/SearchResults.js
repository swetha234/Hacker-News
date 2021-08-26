
import React, { Component } from 'react';
import { setSearchValue, fetchData } from './actions/simpleAction';
import { connect } from 'react-redux';
import './App.css';

class SearchResults extends Component {
	constructor(props) {
		super(props);
		this.state = { searchvalue: ' ' };
	}

	onChangehandler = event => {
		this.props.setSearchValue(event.target.value);
	};
	searchHackernews = event => {
		const query = this.props.searchvalue;
		this.props.fetchData(query);
	};

	render() {
		return (
			<div>
				<div className='class1'>
				
				</div>
				<div className='class2'>
					<p
						style={{
							fontFamily: 'Helvetica',
							fontSize: '20px',
							marginLeft: '20px'
						}}
					>
					</p>
          
					{/* {this.props.results && <SearchResults data={this.props.results} />} */}
          <div>
      {props.data.hits && props.data.hits.length ? (
        <ol>
          <p style={{ fontFamily: 'Italic', fontSize: '20px' }}>
            Here are the related links for your search
          </p>
          {props.data.hits.map((hit, index) => {
            return (
              <li key={index} style={{ margin: '15px 0' }}>
                <div>Title: {hit.title}</div>
                <a
                  href={hit.url}
                  style={{ color: ' #blue ', alignItems: 'center' }}
                  target='_blank' 
                  rel="noopener noreferrer"
                >
                  Open Link
                </a>
              </li>
            );
          })}
        </ol>
      ) : (
        'No results found'
      )}
    </div>
				</div>
			</div>
			
		);
	}
}


const mapStateToProps = state => ({
	searchvalue: state.simpleReducer.searchvalue,
	results: state.simpleReducer.results
});

const mapDispatchToProps = dispatch => ({
	setSearchValue: value => dispatch(setSearchValue(value)),
	fetchData: value => dispatch(fetchData(value))
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);

// import React from 'react';

