<!-- markdownlint-disable MD033 -->

<h1 align="center">
  <a id="user-content--k8s-homelab-flux-" class="anchor" aria-hidden="true" href="#-k8s-homelab-flux-">
    <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
      <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
    </svg>
  </a> k8s-homelab-flux
</h1>

<p align="center">
  <a href="https://github.com/k8s-at-home" alt="Image used with permission from k8s-at-home">
    <img alt="Image used with permission from k8s-at-home" src="https://avatars.githubusercontent.com/u/61287648" />
  </a>
</p>

<p align="center">
  <a href="https://k3s.io/"><img alt="k3s" src="https://img.shields.io/badge/k3s-v1.28.3-orange?logo=kubernetes&logoColor=white&style=flat-square"></a>&nbsp;
  <a href="https://github.com/nea0d/k8s-homelab-flux/stargazers"><img alt="GitHub Stars" src="https://img.shields.io/github/stars/nea0d/k8s-homelab-flux?logo=github&color=green&logoColor=white&style=flat-square"></a>&nbsp;
  <a href="https://github.com/nea0d/k8s-homelab-flux/commits/main"><img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/nea0d/k8s-homelab-flux?logo=git&logoColor=white&color=purple&style=flat-square"></a>&nbsp;
  <a href="https://github.com/nea0d/k8s-homelab-flux/commits/main"><img alt="GitHub tag checks state" src="https://img.shields.io/github/checks-status/nea0d/k8s-homelab-flux/main"></a>&nbsp;
  <a href="https://discord.gg/home-operations"><img alt="K8s-at-home Discord" src="https://img.shields.io/badge/discord-chat-7289DA.svg?logo=discord&logoColor=white&maxAge=60&style=flat-square"></a>
</p>

<p align="center">
Using GitOps principals and workflow to manage a lightweight <a href="https://k3s.io">k3s</a> cluster.
</p>

---

## 📖 Overview

This is a mono repository for my home infrastructure and Kubernetes cluster. I try to adhere to Infrastructure as Code (IaC) and GitOps practices using tools like [Ansible](https://www.ansible.com/), [Terraform](https://www.terraform.io/), [Kubernetes](https://kubernetes.io/), [Flux](https://github.com/fluxcd/flux2), [Renovate](https://github.com/renovatebot/renovate), and [GitHub Actions](https://github.com/features/actions).

---

## ⛵ Kubernetes

There is a template over at [onedr0p/flux-cluster-template](https://github.com/onedr0p/flux-cluster-template) if you want to try and follow along with some of the practices I use here.

### ⚙️ Installation

My cluster is [k3s](https://k3s.io/) overtop Ubuntu 22.04LTS VMs provisioned in a 2-nodes PromoxVE 8 cluster using the [Ansible](https://www.ansible.com/) galaxy role [ansible-role-k3s](https://github.com/PyratLabs/ansible-role-k3s). This is a semi-hyper-converged cluster, workloads and block storage are sharing the same available resources on my nodes while I have a separate server for (NFS) file storage.

🔸 _[Click here](./ansible/) to see my Ansible playbooks and roles._

### 🔧 Core Components

- [actions-runner-controller](https://github.com/actions/actions-runner-controller): self-hosted Github runners
- [cilium](https://github.com/cilium/cilium): internal Kubernetes networking plugin
- [cert-manager](https://cert-manager.io/docs/): creates SSL certificates for services in my cluster
- [external-dns](https://github.com/kubernetes-sigs/external-dns): automatically syncs DNS records from my cluster ingresses to a DNS provider
- [ingress-nginx](https://github.com/kubernetes/ingress-nginx/): ingress controller for Kubernetes using NGINX as a reverse proxy and load balancer
- [rook](https://github.com/rook/rook): distributed block storage for persistent storage
- [sops](https://toolkit.fluxcd.io/guides/mozilla-sops/): managed secrets for Kubernetes, Ansible, and Terraform which are committed to Git
- [volsync](https://github.com/backube/volsync) and [snapscheduler](https://github.com/backube/snapscheduler): backup and recovery of persistent volume claims

### 🤖 GitOps

[Flux](https://github.com/fluxcd/flux2) watches the clusters in my [kubernetes](./kubernetes/) folder (see Directories below) and makes the changes to my cluster based on the state of my Git repository.

The way Flux works for me here is it will recursively search the `kubernetes/${cluster}/apps` folder until it finds the most top level `kustomization.yaml` per directory and then apply all the resources listed in it. That aforementioned `kustomization.yaml` will generally only have a namespace resource and one or many Flux kustomizations. Those Flux kustomizations will generally have a `HelmRelease` or other resources related to the application underneath it which will be applied.

[Renovate](https://github.com/renovatebot/renovate) watches my **entire** repository looking for dependency updates, when they are found a PR is automatically created. When some PRs are merged [Flux](https://github.com/fluxcd/flux2) applies the changes to my cluster.

---

## 🤝 Gratitude and Thanks

Thanks to all the people who donate their time to the [Home Operations](https://discord.gg/home-operations) Discord community. A lot of inspiration for my cluster comes from the people who have shared their clusters using the [kubesearch](https://github.com/topics/kubesearch) GitHub topic. Be sure to check out [kubesearch.dev](https://kubesearch.dev/) for ideas on how to deploy applications or get ideas on what you can deploy.

---

## 📜 Changelog

See [commit history](https://github.com/nea0d/k8s-homelab-flux/commits/main)
