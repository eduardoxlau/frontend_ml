import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import App from "../../pages/index";

describe("App", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const app = shallow(<App />);
    expect(app.find("container__Container").text()).toEqual(
      "Realiza una busqueda"
    );
  });
});
