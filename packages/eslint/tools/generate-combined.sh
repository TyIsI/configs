#!/bin/bash

cd "$(dirname "$(realpath "$0")")/../" || exit 255

OUTPUT_FILE="src/configs/combined.ts"

(
    cat << EOS
import type { Linter } from 'eslint'

EOS

    find src/configs/ -type f | grep -vw combined | sort | while read -r CF; do
        CONFIG_TYPE=$(basename "${CF/.ts/}")
        DEFAULT_EXPORT=$(grep -w 'export default' "${CF}" | awk '{ print $3 }')

        echo "import { ${DEFAULT_EXPORT} } from './${CONFIG_TYPE}.js'"
    done

    cat << EOS

export const combinedConfig: Linter.Config[] = {
EOS

    find src/configs/ -type f | grep -vw combined | sort | while read -r CF; do
        CONFIG_TYPE=$(basename "${CF/.ts/}")
        DEFAULT_EXPORT=$(grep -w 'export default' "${CF}" | awk '{ print $3 }')

        echo "    ...${DEFAULT_EXPORT},"
    done

    cat << EOS
}

export default combinedConfig
EOS

) | tee "${OUTPUT_FILE}" && node_modules/.bin/eslint --fix "${OUTPUT_FILE}" && node_modules/.bin/prettier -w "${OUTPUT_FILE}"
