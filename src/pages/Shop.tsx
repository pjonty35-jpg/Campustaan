import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Campustaan T-Shirt",
      description: "Limited edition premium cotton t-shirt with Campustaan logo",
      price: 499,
      type: "tshirt",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Campustaan Mug",
      description: "Ceramic mug perfect for your morning coffee",
      price: 299,
      type: "mug",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Campustaan Stickers Pack",
      description: "Set of 10 waterproof vinyl stickers",
      price: 99,
      type: "sticker",
      image: "/placeholder.svg"
    }
  ];

  const handleBuy = (productName: string) => {
    toast.success(`Added ${productName} to cart! (Demo - actual purchase flow coming soon)`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Campustaan Shop
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get your exclusive Campustaan merchandise - Limited Edition!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="flex flex-col">
              <CardHeader>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <CardTitle>{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-3xl font-bold text-primary">₹{product.price}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full"
                  onClick={() => handleBuy(product.name)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Buy Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
