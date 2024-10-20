export default function CardProduct({
    image,
    price,
    title,
    quantity,
    region,
}: {
    image: string;
    price: string;
    title: string;
    quantity: string;
    region: string;
}) {
    return (
        <div className="border border-gray-300 rounded-lg w-full max-w-[230px] text-left shadow-md bg-white cursor-pointer m-auto p-4">
            <img
                src={image}
                alt={title}
                className="w-full h-[130px] mb-4"
            />
            <div className="text-[#071437] mx-auto">
                <p className="mt-2 text-sm">{price}</p>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm">{quantity}</p>
                <p className="text-sm mb-3">{region}</p>
            </div>
        </div>
    );
}

