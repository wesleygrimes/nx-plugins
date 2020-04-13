import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { VueSchematicSchema } from './schema';

describe('vue schematic', () => {
  let appTree: Tree;
  const options: VueSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@nx-plugins/vue',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('vue', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
