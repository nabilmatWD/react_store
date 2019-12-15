import React, { Component } from "react";
import { LinkData } from "./LinkData";

const ProductContext = React.createContext();
// Provider
// Consumer
class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 13,
    links: LinkData,
    cart: []
  };
  // Handle Sidebar
  handleSidebar = () => {
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };

  // Handle Cart
  handleSideCart = () => {
    this.setState({ cartOpen: !this.state.cartOpen });
  };

  // Close cart
  closeCart = () => {
    this.setState({ cartOpen: false });
  };

  // Open cart
  openCart = () => {
    this.setState({ cartOpen: true });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleSideCart: this.handleSideCart,
          closeCart: this.closeCart,
          openCart: this.openCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
