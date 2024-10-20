import CardProduct from "./card";

export default function Page() {
    return (
        <div>
            <h1>Product Cards</h1>
            <CardProduct
                image="https://i.postimg.cc/WpxMfBZb/beans.png"
                price="GH¢ 50"
                title="Beans"
                quantity="1999 metric tonnes"
                region="Afigya-Kwabre"
            />
        </div>
    )
}