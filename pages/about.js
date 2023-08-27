
import Router from "next/router";

const about = (props) => {

    const { products } = props;

    function linkredirext() {
        Router.push('/blog/isgfig')
    }

    return (
        <>
        <div className="container">
            <div className="p-4 bg-light">
            <h2>About us</h2>
        <div onClick={linkredirext}>Blog</div>
            </div>

            
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title} - {product.description}</li>
            ))}
          </ul>

        
        </div>
        </>
    );
}

export async function getStaticProps() {

    return {
      props: {
            products: [
                { id: 'p1', title: 'product 1', description: "demo description text" }, 
                { id: 'p2', title: 'product 2', description: "demo description text"  }, 
                { id: 'p3', title: 'product 3', description: "demo description text"  }, 
                { id: 'p4', title: 'product 4', description: "demo description text"  }],
      },
    };
  }


export default about;


