import { useQuery, gql } from "@apollo/client"

const CATEGORY_QUERY = gql`
  query Product($ID: String!) {
    category(where: { id: $ID }) {
      name
      description
    }
  }
`;


const Category = ({id}) => {

    const { data, loading, error } = useQuery(CATEGORY_QUERY, {
        variables: {id}
    })

    
    return (
        <main></main>
    )
}


export default Category