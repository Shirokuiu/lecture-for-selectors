import PieCartHasInStock from 'src/components/shared/pie-cart/pie-cart-has-in-stock/pie-cart-has-in-stock';
import PieCartLikes from 'src/components/shared/pie-cart/pie-cart-likes/pie-cart-likes';
import PieCartRate from 'src/components/shared/pie-cart/pie-cart-rate/pie-cart-rate';
import PieCartWeightChooser from 'src/components/shared/pie-cart/pie-cart-weight-chooser/pie-cart-weight-chooser';

function PieCart() {
  return (
    <div className="pie-cart">
      <div className="pie-cart__img-wrap" />
      <div className="pie-cart__content">
        <div className="pie-cart__rate-wrap">
          <p className="pie-cart__rate-title">Осетинский пирог</p>
          <PieCartRate />
          <PieCartLikes />
        </div>
        <p className="pie-cart__content-title">С МЯСОМ «ФЫДДЖИН»</p>
        <div className="pie-cart__weight">
          <div className="pie-cart__weigh-row-top">
            <PieCartHasInStock />
            <p className="pie-cart__weight-title">выберите вес:</p>
          </div>
          <PieCartWeightChooser />
        </div>
      </div>
    </div>
  );
}

export default PieCart;
