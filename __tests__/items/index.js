import { shallow } from "enzyme";
import Item from "components/item";
import { Items as dataDefault } from "utils/constants";
import Items from "../../pages/items/index";

const mockITEMS = dataDefault;
jest.mock("../../fetch_api", () => ({
  getItems: () => Promise.resolve({ items: mockITEMS }),
}));

describe("Items", () => {
  it("should render correctly", () => {
    const wrapper = shallow(<Items />);
    expect(wrapper).toMatchSnapshot();
  });

  it("shouldn`t render item component if there is items nothings", () => {
    const items = shallow(<Items />);
    expect(items.find(Item)).toHaveLength(0);
  });
  it("shouldn render item component if there is items", () => {
    const items = shallow(<Items items={dataDefault} />);
    expect(items.find(Item)).toHaveLength(2);
  });
  it("shouldn return array of items", async () => {
    const props = await Items.getInitialProps({
      query: { search: "whatever" },
    });
    expect(props.items.length).toEqual(2);
  });
});
