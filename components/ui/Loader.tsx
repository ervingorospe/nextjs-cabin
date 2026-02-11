"use client";

const Loading = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Spinner = () => {
  return <p>spinner</p>;
};

Loading.spinner = Spinner;

export default Loading;
