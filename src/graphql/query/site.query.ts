import { gql } from "graphql-request";

export const SITES_ID = gql`
  query SitesAll {
    sitesAll {
      _id
    }
  }
`;
export const CHILDREN_0 = gql`
  query GetChildrens0($_id:ID!, $input: ChildrenInput!) {
    getChildrens0(_id:$_id, input: $input) {
			name
      href
      imageSrc
    }
  }
`;
export const CHILDREN_1 = gql`
  query GetChildrens1($_id:ID!, $input: ChildrenInput!) {
    getChildrens1(_id:$_id, input: $input) {
			name
      href
      imageSrc
    }
  }
`;
export const CHILDREN_2 = gql`
  query GetChildrens2($_id:ID!, $input: ChildrenInput!) {
    getChildrens2(_id:$_id, input: $input) {
			name
      href
      imageSrc
    }
  }
`;
export const CHILDREN_3 = gql`
  query GetChildrens3($_id:ID!, $input: ChildrenInput!) {
    getChildrens3(_id:$_id, input: $input) {
			name
      href
      imageSrc
    }
  }
`;
export const SITES = gql`
  query SitesAll {
    sitesAll {
      _id
      client
      type
      domain
      data {
        title
        logo
        icon
        imageSrc
        imageAlt
        numberPhone
        address
        location
        description
      }
      route {
        uid        
        name
        href
        description
        imageSrc
        imageAlt
        content {
          body {
            h1
            span
            p
            imageSrc
            imageAlt
          }
        }
        children {
          uid   
          name
          href
          icon
          description
          imageSrc
          imageAlt
          children {
            uid   
            name
            href
            icon
            description
            imageSrc
            imageAlt
            children {
              uid   
              name
              href
              description
              imageSrc
              imageAlt
              children {
                uid   
                name
                href
                description
                imageSrc
                imageAlt
              }
            }
          }
        }
      }
    }
  }
`;
export const SITE = gql`
  query Site($_id: ID!) {
    site(_id: $_id) {
      _id
      client
      type
      domain
      data {
        title
        logo
        icon
        imageSrc
        imageAlt
        numberPhone
        address
        location
        description
      }
      route {
        name
        href
        description
        imageSrc
        imageAlt
        content {
          
          body {
            h1
            span
            p
            imageSrc
          }
        }
        children {
          name
          href
          description
          imageSrc
          imageAlt
          children {
            name
            href
            description
            imageSrc
            imageAlt
            children {
              name
              href
              description
              imageSrc
              imageAlt
            }
          }
        }
      }
    }
  }
`;
// export const CHILDREN_0 = gql`
//   query Site($_id: ID!) {
//     site(_id: $_id) {
//       route {
//         name
//         href
//         description
//         imageSrc
//         imageAlt
//       }
//     }
//   }
// `;
// export const CHILDREN_1 = gql`
//   query Site($_id: ID!) {
//     site(_id: $_id) {
//       route {
//         children {
//         name
//         href
//         description
//         imageSrc
//         imageAlt
//       }
//       }
//     }
//   }
// `;
export const SITE_PATHS = gql`
  query Site($_id: ID!) {
    site(_id: $_id) {
      route {
        href
        children {
          href
          children {
            href
            children {
              href
            }
          }
        }
      }
    }
  }
`;
export const SITE_PATHS_TREE = gql`
  query Site($_id: ID!) {
    site(_id: $_id) {
      route {
        name
        href
        children {
          name
          href
          children {
            name
            href
            children {
              name
              href
            }
          }
        }
      }
    }
  }
`;

export const SITE_CONTENT = gql`
  query Site($_id: ID!) {
    site(_id: $_id) {
      route {
        content {
          
          body {
            h1
            span
            p
            imageSrc
          }
        }
      }
    }
  }
`;
