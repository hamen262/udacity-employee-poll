import "@testing-library/jest-dom";
import { formatDate } from "./helpers";
test('format timestamp', () => {
    const timestamp = 1712591620897;
    var converted = formatDate(timestamp);
    expect(converted).toBe('10:53PM | 4/8/2024');
});