def string_to_dict(s: str):
    result = {}
    elements = s.strip().split(",") if s else []
    for element in elements:
        pair = element.strip().split("=")
        key, value = pair[0], pair[1]
        result[key] = value
    return result


if __name__ == "__main__":
    print(string_to_dict("a=1"))
    print(string_to_dict("a=1,b=2"))
    print(string_to_dict(""))
    print(string_to_dict(None))
