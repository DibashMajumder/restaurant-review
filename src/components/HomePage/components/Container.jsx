import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const Container = ({ cityId, handleCity }) => {
	const { loading, error, data } = useQuery(gql`
		{
			getData(cityId: ${cityId}) {
				has_total
				share_url
				collections {
					collection {
						collection_id
						title
						url
						description
						image_url
						res_count
						share_url
					}
				}
			}
		}
	`);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	console.log(data);
	return (
		<div>
			Hello World Lenght of Collection {data.getData.collections.length}
			<button onClick={() => handleCity(280)}>280</button>
			<button onClick={() => handleCity(281)}>281</button>
			<button onClick={() => handleCity(282)}>282</button>
		</div>
	);
};

export default Container;
