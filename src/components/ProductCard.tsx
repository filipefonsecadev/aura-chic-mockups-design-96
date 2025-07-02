import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  onSale?: boolean;
}

const ProductCard = ({ image, name, price, originalPrice, isNew, onSale }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-300 hover-lift cursor-pointer">
      <div 
        className="relative overflow-hidden"
        onClick={() => navigate('/produto/1')}
      >
        <img 
          src={image} 
          alt={name}
          className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
              Novo
            </span>
          )}
          {onSale && (
            <span className="bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded-full font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Quick add button */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button 
            variant="elegant" 
            size="sm" 
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            onClick={(e) => {
              e.stopPropagation();
              navigate('/carrinho');
            }}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Adicionar
          </Button>
        </div>
      </div>

      <CardContent className="p-4" onClick={() => navigate('/produto/1')}>
        <h3 className="font-medium text-foreground mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-primary">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              R$ {originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;