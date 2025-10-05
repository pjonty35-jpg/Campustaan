import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import campustaanBg from "@/assets/campustaan-background.jpg";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Campustaan Limited Edition T-Shirt",
      description: "Premium quality cotton t-shirt with exclusive Campustaan design",
      price: 499,
      type: "tshirt",
      stock: 50
    },
    {
      id: 2,
      name: "Campustaan Coffee Mug",
      description: "Ceramic mug perfect for your morning coffee or tea",
      price: 299,
      type: "mug",
      stock: 100
    },
    {
      id: 3,
      name: "Campustaan Sticker Pack",
      description: "Set of 5 waterproof stickers with cool Campustaan designs",
      price: 99,
      type: "sticker",
      stock: 200
    }
  ];

  const handleBuy = (productName: string) => {
    toast.success(`${productName} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main 
        className="relative min-h-screen py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${campustaanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
            Campustaan Shop
          </h1>
          <p className="text-white/80 text-center mb-12">
            Get your exclusive Campustaan merchandise
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="bg-white/10 backdrop-blur-lg border-white/20 overflow-hidden hover:bg-white/15 transition-all">
                <div className="h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center">
                  <div className="text-6xl">
                    {product.type === "tshirt" && "👕"}
                    {product.type === "mug" && "☕"}
                    {product.type === "sticker" && "🎨"}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">₹{product.price}</span>
                    <span className="text-sm text-white/60">{product.stock} in stock</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button
                    onClick={() => handleBuy(product.name)}
                    className="w-full h-12 font-bold bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-lg shadow-amber-500/50"
                  >
                    <ShoppingCart className="mr-2" size={18} />
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
