#!/bin/bash

cd "$(dirname "$(realpath "$0")")/../" || exit 255

OUTPUT_FILE="src/index.ts"

(
    find src/configs/ -type f | sort | while read -r CF; do
        CONFIG_TYPE=$(basename "${CF/.ts/}")
        DEFAULT_EXPORT=$(grep -w 'export default' "${CF}" | awk '{ print $3 }')

        echo "import { ${DEFAULT_EXPORT} } from './configs/${CONFIG_TYPE}.js'"
    done

    echo ""

    find src/configs/ -type f | sort | while read -r CF; do
        CONFIG_TYPE=$(basename "${CF/.ts/}")
        DEFAULT_EXPORT=$(grep -w 'export default' "${CF}" | awk '{ print $3 }')

        echo "export const ${CONFIG_TYPE} = ${DEFAULT_EXPORT}"
    done

    echo ""

    echo "export const configs = { $(find src/configs/ -type f | sort | xargs -n 1 basename | sed 's/\.ts//g' | xargs | sed 's/ /, /g') }"
    echo ""
    echo "export default combinedConfig"

) | tee "${OUTPUT_FILE}" \
    && node_modules/.bin/eslint --fix "${OUTPUT_FILE}" && node_modules/.bin/prettier -w "${OUTPUT_FILE}"
