# AWS Toolbox -- Development

## Requirements
```
pip install --upgrade pip
pip install -r requirements-dev.txt
```

## Configure Pre-Commit
Install pre-commit hook for the local repo:
```
pre-commit install
```

For the first time, run pre-commit checks on the whole codebase:
```
pre-commit run --all-files
```

## Install
Install the package on your local environment:
```
pip install -e .
```

## Build
```
python -m build
```

## Publish
Publish to PyPi test repo at [TestPyPi:yawa-ops](https://test.pypi.org/project/yawa-ops):
```
python -m twine upload --repository testpypi dist/*
```

Publish to PyPi production repo at [PyPi:aws-toolbox](https://pypi.org/project/yawa-ops):
```
python -m twine upload dist/*
```
