import os


def read_env():
    env_file = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
    with open(env_file) as f:
        for line in f:
            if line.startswith('#') or not line.strip():
                continue
            key, value = line.strip().split('=', 1)
            os.environ[key] = value
