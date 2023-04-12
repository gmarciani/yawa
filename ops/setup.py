import os

from setuptools import find_packages, setup

METADATA = {}
with open("./src/yawa_ops/config/metadata.py") as metadata_file:
    exec(metadata_file.read(), METADATA)


def readme():
    with open(os.path.join(os.path.dirname(__file__), "README.md"), encoding="utf-8") as f:
        return f.read()


def requirements():
    dependencies = ["setuptools~=63.2.0"]
    with open(os.path.join(os.path.dirname(__file__), "requirements.txt"), encoding="utf-8") as f:
        dependencies.extend([line.strip() for line in f.readlines() if line.strip()])
    return dependencies


setup(
    name=METADATA["NAME"],
    version=METADATA["VERSION"],
    author="Giacomo Marciani",
    description="YAWA Ops",
    url="https://github.com/gmarciani/yawa",
    license="MIT License",
    package_dir={"": "src"},
    packages=find_packages("src"),
    python_requires=">=3.9",
    install_requires=requirements(),
    entry_points={
        "console_scripts": [
            "yawa-ops = yawa_ops.cli:main",
        ]
    },
    include_package_data=True,
    zip_safe=False,
    long_description=readme(),
    long_description_content_type="text/markdown",
    classifiers=[
        "Development Status :: 1 - Planning",
        "Environment :: Console",
        "Programming Language :: Python",
        "Programming Language :: Python :: 3",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
        "Programming Language :: Python :: 3.10",
        "Topic :: Scientific/Engineering",
        "License :: OSI Approved :: MIT License",
    ],
    project_urls={
        "Changelog": "https://github.com/gmarciani/yawa/CHANGELOG.md",
        "Issue Tracker": "https://github.com/gmarciani/yawa/issues",
        "Documentation": "https://github.com/gmarciani/yawa",
    },
)
