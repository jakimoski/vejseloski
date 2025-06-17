export type TlogoMarqueeProps = {
  children: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  baseVelocity: string | number | any;
};

export type TMarqueeProps = {
  title: string;
  className: string;
};

export type TtextHoverProps = {
  titile1: string;
  titile2: string;
};

export type Product = {
  id: number;
  name: string;
  code: string;
  price_out: string;
  tax_out: string;
};
