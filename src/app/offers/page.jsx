import CardBackg from "../_components/cardBackg.jsx/Card";

export default function Page() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5 ">
      <CardBackg
        title="الباقة البرو"
        data="A3"
        des={["Mohamed", "count", "class", "cotsh"]}
      />
      <CardBackg
        title="الباقة البرو"
        data="A3"
        des={["Mohamed", "count", "class", "cotsh"]}
      />
      <CardBackg
        title="الباقة البرو"
        data="A3"
        des={["Mohamed", "count", "class", "cotsh"]}
      />
      <CardBackg
        title="الباقة البرو"
        data="A3"
        des={["Mohamed", "count", "class", "cotsh"]}
      />
    </div>
  );
}
