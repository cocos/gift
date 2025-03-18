
import ps from 'path';
import fs from 'fs-extra';
import { bundle } from '../../source/gift';

describe('enum negative value export', () => {

    test('enum negative value', async () => {
        const inputPath = ps.join(__dirname, 'input.d.ts');
        const outputPath = ps.join(__dirname, 'output.d.ts');
        const result = bundle({
            input: inputPath,
            rootModule: 'index',
            name: 'out/index',
            output: outputPath,
        });
        expect(result.groups.length).toBe(1);
        expect(result.groups[0].code).toMatchSnapshot();
    });

});