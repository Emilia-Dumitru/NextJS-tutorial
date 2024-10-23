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
             <CardProduct
                image="https://i.postimg.cc/Y0FmHSF2/maize.png"
                price="Gh¢ 1200"
                title="Maize"
                quantity="126 metric tonnes"
                region="Tema Metropolitan"
            />
             <CardProduct
                image="https://i.postimg.cc/N0GTHY3b/yam.png"
                price="Gh¢ 300"
                title="Yam"
                quantity="100 kilograms"
                region="Afigya-Kwabre"
            />
             <CardProduct
                image="https://i.postimg.cc/WpxMfBZb/beans.png"
                price="GH¢ 50"
                title="Beans"
                quantity="10 kilograms"
                region="Asante Akim North"
            />
             <CardProduct
                image="https://i.postimg.cc/CxgbwbJ3/soghum.png"
                price="Gh¢ 560"
                title="Sorghum"
                quantity="-61000 metric tonnes"
                region="Tema Metropolitan"
            />
        </div>
    )
}