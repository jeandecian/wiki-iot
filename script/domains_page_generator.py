def read_file(file_path):
    return open(file_path, "r")


def get_top_level_dict(file_path, output_dict):
    domains = read_file(file_path)

    for domain in domains:
        domain = domain.strip('\n')
        domain_section = domain.split('.')
        top_level = domain_section[-1]
        if (top_level in output_dict.keys()):
            output_dict[top_level].append(domain)
        else:
            output_dict[top_level] = [domain]

    return output_dict


top_level_dict = get_top_level_dict("../universities_domains.txt", {})
top_level_dict = get_top_level_dict("../custom_domains.txt", top_level_dict)


with open('domains_page.txt', 'w') as output:
    for key in sorted(top_level_dict):
        output.write(f"== {key} ==\n")
        domains = sorted(top_level_dict[key])
        for domain in domains:
            output.write(f"* {domain}\n")
