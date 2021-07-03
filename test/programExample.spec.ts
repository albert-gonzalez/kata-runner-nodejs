import { program } from "../src/programExample";

describe("Gilded Rose Program Example", () => {
  test("should update the items correctly", () => {
    const updatedItems = program();

    expect(updatedItems instanceof Array).toBeTruthy();
    expect(updatedItems[0].quality).toEqual(19);
    expect(updatedItems[0].sellIn).toEqual(9);

    expect(updatedItems[1].quality).toEqual(1);
    expect(updatedItems[1].sellIn).toEqual(1);

    expect(updatedItems[2].quality).toEqual(6);
    expect(updatedItems[2].sellIn).toEqual(4);

    expect(updatedItems[3].quality).toEqual(80);
    expect(updatedItems[3].sellIn).toEqual(0);

    expect(updatedItems[4].quality).toEqual(21);
    expect(updatedItems[4].sellIn).toEqual(14);

    expect(updatedItems[5].quality).toEqual(5);
    expect(updatedItems[5].sellIn).toEqual(2);
  });
});
