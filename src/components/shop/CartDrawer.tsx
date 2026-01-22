import { FC } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

export const CartDrawer: FC = () => {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50"
            onClick={() => setIsCartOpen(false)}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[hsl(var(--background))] border-l border-[hsl(var(--border))] z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[hsl(var(--border))]">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-5 h-5" />
                <h2 className="font-heading text-xl tracking-wide">
                  CART ({totalItems})
                </h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-[hsl(var(--accent))] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-12 h-12 text-[hsl(var(--muted-foreground))] mb-4" />
                  <p className="text-[hsl(var(--muted-foreground))] tracking-wide">
                    YOUR CART IS EMPTY
                  </p>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mt-2">
                    The work awaits.
                  </p>
                </div>
              ) : (
                items.map(item => (
                  <motion.div
                    key={`${item.product.id}-${item.size}-${item.color}`}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="flex gap-4"
                  >
                    {/* Product Image */}
                    <div className="w-24 h-32 bg-[hsl(var(--forge-black))] overflow-hidden flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-heading text-sm tracking-wide">
                          {item.product.name}
                        </h3>
                        <p className="text-xs text-[hsl(var(--muted-foreground))] mt-1">
                          {item.size && `Size: ${item.size}`}
                          {item.size && item.color && ' / '}
                          {item.color && `Color: ${item.color}`}
                        </p>
                        <p className="font-heading text-lg mt-2">
                          ${item.product.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="w-8 h-8 border border-[hsl(var(--border))] flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center font-mono">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="w-8 h-8 border border-[hsl(var(--border))] flex items-center justify-center hover:bg-[hsl(var(--accent))] transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="p-2 text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--forge-ember))] transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[hsl(var(--border))] space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[hsl(var(--muted-foreground))] tracking-wide text-sm">
                    SUBTOTAL
                  </span>
                  <span className="font-heading text-2xl">${totalPrice}</span>
                </div>
                <p className="text-xs text-[hsl(var(--muted-foreground))]">
                  Shipping calculated at checkout
                </p>
                <Button className="w-full bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-[hsl(var(--forge-ember))] h-14 font-heading tracking-[0.2em]">
                  CHECKOUT
                </Button>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="w-full text-center text-sm text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] transition-colors tracking-wide"
                >
                  CONTINUE SHOPPING
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
