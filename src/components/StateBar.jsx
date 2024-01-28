import { Time } from "./Time";

const StateBar = () => {
  return (
    <div className="d-flex justify-content-between mx-5 mt-4 text-white">
      <Time />
      <section className="d-flex gap-2">
        <i className="bi bi-reception-4"></i>
        <i className="bi bi-wifi"></i>
        <i className="bi bi-battery-full"></i>
      </section>
    </div>
  );
};

export { StateBar };
