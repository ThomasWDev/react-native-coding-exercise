import { gql } from '@apollo/client';

const GET_LAUNCHES_PAST_RESULT = gql`
	query getLaunchesPastResult(
		$limit: Int
		$offset: Int
		$sort: String
		$find: String
	) {
		launchesPastResult(
			limit: $limit
			offset: $offset
			sort: $sort
			find: { mission_name: $find }
		) {
			data {
				id
				mission_name
				launch_date_local
				launch_year
				launch_site {
					site_name_long
				}
				links {
					article_link
					video_link
				}
				rocket {
					rocket_name
					rocket_type
				}
				ships {
					name
					home_port
					image
				}
			}
			result {
				totalCount
			}
		}
	}
`;

export { GET_LAUNCHES_PAST_RESULT };
